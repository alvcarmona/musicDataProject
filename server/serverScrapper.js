const rp = require('request-promise');
const cheerio = require('cheerio');
const https = require('https');
const fs = require('fs');

//download('https://spotifycharts.com/regional/us/daily/2018-08-16/download','./data/us.cvs',function(){console.log('termino')})

let options = {
    uri: `https://spotifycharts.com/`,
    transform: function (body) {
        return cheerio.load(body);
    }
};

function createJsonFile(elem, fileName) {
    fs.writeFile(fileName, JSON.stringify(elem), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        ;
        console.log("File has been created");
    });
}

function getFilters() {
    rp(options)
        .then(($) => {
            let countries = {}
            let dates = {}
            const filterList = $('.chart-filters-list').find('ul').each(function (i, elem) {
                switch (i) {
                    case 0:
                        elem.children.map(function (country) {
                            if (country.children) {
                                countries[country.attribs['data-value']] = country.children[0].data
                            }

                        });
                    case 2:
                        elem.children.map(function (date) {
                            if (date.children) {
                                dates[date.attribs['data-value']] = date.children[0].data;
                            }

                        });
                }
            });
            console.log('Filters loaded')
            createJsonFile(countries, './filters/countries.json')
            createJsonFile(dates, './filters/dates.json')
        })
        .catch((err) => {
            console.log(err);
        });
}

function generateLinksFromFilters(countries, dates) {
    let links = {}
    for (country in countries) {
        for (date in dates) {
            links[country+'_'+date+'_daily_regional']='https://spotifycharts.com/regional/' + country + '/daily/' + date + '/download'
            links[country+'_'+date+'_daily_viral']='https://spotifycharts.com/viral/' + country + '/daily/' + date + '/download'
        }
    }
    return links
}

function download(url, dest, cb) {
    return new Promise(function (resolve, reject) {
        let request = https.get(url, function (response) {
            let file = fs.createWriteStream(dest);
            response.pipe(file);
            file.on('finish', function () {
                console.log('File downloaded')
                resolve(file.close(cb));  // close() is async, call cb after close completes.

            });
        }).on('error', function (err) { // Handle errors
            reject(err)
        });
    })

};


//    https://spotifycharts.com/viral/global/daily/2018-08-12/download
    fs.readFile('./filters/countries.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            let countries = JSON.parse(data); //now it an object
            fs.readFile('./filters/dates.json', 'utf8', function readFileCallback(err, data) {
                if (err) {
                    console.log(err);
                } else {
                    let dates = JSON.parse(data); //now it an object
                    let links = generateLinksFromFilters(countries, dates)
                    let promise = Promise.resolve();
                    for(let key in links){
                        promise = promise.then(()=> download(links[key], './data/' +key+ '.csv'));
                    }
                }
            });
        }
    })

function recursiveDownload(links, i) {
    if (i < links.length) {
      download(links[i], './data/' + i + '.csv',recursiveDownload(links, ++i))
    } else {
        console.log('ended recursion')
    }
}

