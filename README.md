# assesment

Om de frontend te runnen:
$ sudo npm install

Als dat klaar is:
$ gulp


Om de backend te runnen:


1: Vagrant file aanpassen met de juiste paden naar het project:
config.vm.synced_folder "{{location}}/Assesment/backend", "/var/www", disabled: false
config.vm.synced_folder "./provision", "{{location}}/Assesment/backend/provision"


2: In de map backend/provision de file bootstrap.sh pas aanpassen:
sudo cp {{location}}/Assesment/backend/provision/apache_config /etc/apache2/sites-available/site.conf


3: $ sudo nano /etc/host

toevoegen: 33.33.33.33 assesment.dev


4: $ sudo composer install


5: $ vagrant up


6: update database:

$ vagrant ssh

$ cd /var/www

$ mysql -uroot -proot

$ use assement

$ source assesment_2017-01-23.sql


7: gaat naar: assesment.dev om de pagina te bekijken