const request = require('request');
module.exports.octetStream = async (req, res) => {
	console.log(req.query.url);
	let url = req.query.url;
	let cleanUrl = url.trim();
	let filename = cleanUrl.split('/').pop();
	let type = filename.split('.').pop();
	request(cleanUrl)
		.on("response", remoteRes => {
		    // You can add/remove/modify headers here
		    remoteRes.headers["Content-type"] = "application/octetStream";
		    remoteRes.headers["Content-disposition"] = "attachment; filename="+filename;
		})
		.pipe(res);
		// .on('finish',()=>{res.send('done')});

};