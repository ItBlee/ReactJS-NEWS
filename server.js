const express = require('express'); //Line 1
const { send } = require('process');
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const trang_chu = "https://vnexpress.net/rss/tin-moi-nhat.rss"
const giai_tri = "https://vnexpress.net/rss/giai-tri.rss"
const the_thao = "https://vnexpress.net/rss/the-thao.rss"
const du_lich = "https://vnexpress.net/rss/du-lich.rss"
const cuoi = "https://vnexpress.net/rss/cuoi.rss"
const khoa_hoc = "https://vnexpress.net/rss/khoa-hoc.rss"
const thoi_su = "https://vnexpress.net/rss/thoi-su.rss"
const the_gioi = "https://vnexpress.net/rss/the-gioi.rss"
const phap_luat = "https://vnexpress.net/rss/phap-luat.rss"
const giao_duc = "https://vnexpress.net/rss/giao-duc.rss"
const kinh_doanh = "https://vnexpress.net/rss/kinh-doanh.rss"
const doi_song = "https://vnexpress.net/rss/gia-dinh.rss"
const suc_khoe = "https://vnexpress.net/rss/suc-khoe.rss"
const so_hoa = "https://vnexpress.net/rss/so-hoa.rss"
const xe = "https://vnexpress.net/rss/oto-xe-may.rss"
const tam_su = "https://vnexpress.net/rss/tam-su.rss"
const noi_bat = "https://vnexpress.net/rss/tin-noi-bat.rss"
const moi_nhat = "https://vnexpress.net/rss/tin-moi-nhat.rss"
const xem_nhieu = "https://vnexpress.net/rss/tin-xem-nhieu.rss"



// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const http = require('http'),
      https = require('https');

    let client = http;

    if (url.toString().indexOf("https") === 0) {
      client = https;
    }

    client.get(url, (resp) => {
      let chunks = [];

      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        chunks.push(chunk);
      });

      // The whole response has been received. Print out the result.
      resp.on('end', () => {
        resolve(Buffer.concat(chunks));
      });

    }).on("error", (err) => {
      reject(err);
    });
  });
}

// create a GET route
app.get('/trang_chu', (req, res) => {
  getData(res, trang_chu)

}); //Line 11

app.get('/giai_tri', (req, res) => {
  getData(res, giai_tri)
})

app.get('/the_thao', (req, res) => {
  getData(res, the_thao)
})

app.get('/du_lich', (req, res) => {
  getData(res, du_lich)
})

app.get('/cuoi', (req, res) => {
  getData(res, cuoi)
})

app.get('/khoa_hoc', (req, res) => {
  getData(res, khoa_hoc)
})

app.get('/thoi_su', (req, res) => {
  getData(res, thoi_su)
})

app.get('/the_gioi', (req, res) => {
  getData(res, the_gioi)
})

app.get('/phap_luat', (req, res) => {
  getData(res, phap_luat)
})

app.get('/giao_duc', (req, res) => {
  getData(res, giao_duc)
})

app.get('/kinh_doanh', (req, res) => {
  getData(res, kinh_doanh)
})

app.get('/doi_song', (req, res) => {
  getData(res, doi_song)
})

app.get('/suc_khoe', (req, res) => {
  getData(res, suc_khoe)
})

app.get('/so_hoa', (req, res) => {
  getData(res, so_hoa)
})

app.get('/xe', (req, res) => {
  getData(res, xe)
})

app.get('/tam_su', (req, res) => {
  getData(res, tam_su)
})

app.get('/noi_bat', (req, res) => {
  getData(res, noi_bat)
})

app.get('/moi_nhat', (req, res) => {
  getData(res, moi_nhat)
})

app.get('/xem_nhieu', (req, res) => {
  getData(res, xem_nhieu)
})

app.get('/detail/:url', (req, res) => {
  var requestURL = req.params.url
  console.log("A", requestURL);
  if(requestURL !== undefined) {
    var url = 'https://vnexpress.net/'.concat(requestURL)
    getDetail(res, url);
  }
})

app.get('/test', (req, res) => {
})

function getData(res, url) {
  (async (url) => {
    var buf = await httpGet(url);

    var parseString = require('xml2js').parseString;

    var xmldata = buf.toString('utf-8');

    parseString(xmldata, function (err, result) {
      // Result contains XML data in JSON format
      result.rss.channel[0].item.map(el => {
        //console.log(el.description);
        var buf = String(el.description)
        var start = buf.indexOf('src="') + 5
        if (start == -1) {
          el.push
        } else {
          var end = buf.indexOf('" ></a></br>')
          el.description = buf.substring(start, end)
        }
        var data = String(el.pubDate)
        el.pubDate = data.substring(0, 16)
      })
      res.send(result)
      //console.log(url, result)
    });
  })(url);
}

function getDetail(res, url) {
  const request = require('request');
  request(url, function (error, response, body) {
    //console.error('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    var HTMLParser = require('node-html-parser');
    var root = HTMLParser.parse(body);
    //root.querySelectorAll('.sidebar-1').querySelectorAll('div')
    var jsonObj = new Object();

    root.querySelectorAll('.title-detail').map(el => {
      jsonObj.title = el.rawText
    })

    root.querySelectorAll('.description').map(el => {
      jsonObj.description = el.rawText
    })

    jsonObj.detail = new Array()
    root.querySelectorAll('.Normal').map(el => {
      jsonObj.detail.push(el.rawText)
    })

    jsonObj.image = new Array()
    root.querySelectorAll('img').map(el => {
      var url = el.getAttribute('data-src');
      if(url != null)
        jsonObj.image.push(url)
    })

    var arr = root.querySelector('.fck_detail ').innerHTML.split('</p>')
    jsonObj.imagePosition = new Array()
    arr.forEach(e => {
      jsonObj.imagePosition.push(e.indexOf('data-src') >= 0)
    })
    
    var jsonString = JSON.stringify(jsonObj, undefined, 4);
    res.send(jsonString)
  })
}
