# BasketBall Application

##created by team Wellbenix[www.wellbenix.com]


Hosting site on Cpanel:

1. Create .htaccess file
2. Add the following code. Change the port of the current node server

    DirectoryIndex disabled
    RewriteEngine On
    RewriteRule ^$ http://127.0.0.1:4430/ [P,L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^(.*)$ http://127.0.0.1:4430/$1 [P,L]

3. Run the app using pm2
