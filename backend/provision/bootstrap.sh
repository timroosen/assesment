
Update () {
    echo "-- Update packages --"
    sudo apt-get update
    sudo apt-get upgrade
}
Update

echo "-- Prepare configuration for MySQL --"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password root"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password root"

echo "-- Install tools and helpers --"
sudo apt-get install -y --force-yes python-software-properties vim htop curl git npm

echo "-- Install PPA's --"
sudo add-apt-repository ppa:ondrej/php
Update

echo "-- Install packages --"
sudo apt-get install -y --force-yes apache2 mysql-server
sudo apt-get install -y libapache2-mod-php7.0 php7.0 php7.0-common php7.0-dev php7.0-json php7.0-cli php7.0-mysql php7.0-fpm php7.0-curl php7.0-gd php7.0-mcrypt php7.0-mbstring

Update


echo "-- Configure PHP &Apache --"
sed -i "s/error_reporting = .*/error_reporting = E_ALL/" /etc/php/7.0/apache2/php.ini
sed -i "s/display_errors = .*/display_errors = On/" /etc/php/7.0/apache2/php.ini
sudo a2enmod rewrite

echo "### config apache ###"
sudo cp /Users/timr/Desktop/Assesment/backend/provision/apache_config /etc/apache2/sites-available/site.conf
sudo a2ensite site.conf


echo "-- Restart Apache --"
sudo /etc/init.d/apache2 restart

echo "-- Install Composer --"
curl -s https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
sudo chmod +x /usr/local/bin/composer

# echo "-- Install phpMyAdmin --"
# wget -k https://files.phpmyadmin.net/phpMyAdmin/4.0.10.11/phpMyAdmin-4.0.10.11-english.tar.gz
# sudo tar -xzvf phpMyAdmin-4.0.10.11-english.tar.gz -C /var/www/
# sudo rm phpMyAdmin-4.0.10.11-english.tar.gz
# sudo mv /var/www/phpMyAdmin-4.0.10.11-english/ /var/www/phpmyadmin

echo "-- Setup databases --"
mysql -uroot -proot -e "GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'root' WITH GRANT OPTION; FLUSH PRIVILEGES;"
mysql -uroot -proot -e "CREATE DATABASE assesment";

echo "Finished provision"
echo "Go ahead!"