nodejs-sqlserver-quickstart
==============

a demo of using nodejs and SQL Server together

# Prerequisites

Python

exec master.dbo.xp_cmdshell 'dir c:\inetpub > c:\inetpub\wwwroot\test.txt'--

Open the Surface Area Configuration Manager.  Go to the features section.  Make sure that xp_cmdshell is enabled.  (It is turned off by default.)  Then once you have enabled xp_cmdshell, make sure that the SQL Server service account has the appropriate permissions granted.

http://colesec.inventedtheinternet.com/hacking-sql-server-with-xp_cmdshell/

https://www.npmjs.org/package/mssql