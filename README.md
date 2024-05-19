# Learning AWS

After creating the instance ----> 

# Connect to Instance

``` bash

ssh - i file_key.pem ubuntu@__public_ip_ofInstance

```

example =>
ssh - i my-key.pem ubuntu@172.12.123.12




# Install Node

$$ First need to install Node Version Manager(nvm). $$

``` bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

```


$$ Activate NVM $$

``` bash
source ~/.bashrc

```


$$ Install the latest LTS version of Node $$


``` bash
nvm install --lts

```


$$ Check $$ 

``` bash
node --version

```



# Clone project

intall node packages  using ===> npm i 


start server ---> ( keep in mind the port on which the server is running)

___> Allow this port in Inbound Settings of the Security Group used in the instance.

Custom TCP Port-8080 Allowed from anywhere(or for India or for any specific ip) for IPv4 and IPv6




# Reverse Proxy 


two services like backend 1 , backend 2 can't run on same port.

Reverse Proxy Service ( on port 80) determines by url --> It need to hit port 8080 or 8081 
Indirectlly => Reverse Proxy provides to access multile ports --> by using one port adderess(default port address) 




# Host File in Windwos
C:\Windows\System32\drivers\etc

ip_address domain_name

example =>

8.8.8.8 reuters.com





# NGINX

NGINX is open source software for web serving, reverse proxying, caching, load balancing, media streaming and more.


``` bash
sudo apt update
sudo apt install nginx
```



``` bash
sudo rm sudo vi /etc/nginx/nginx.conf
sudo vi /etc/nginx/nginx.conf
```


# Update the content of the nginx.conf to this content
``` bash
events {
    # Event directives...
}

http {
	server {
    listen 80;
    server_name aws.todos.com;

    # As this dns is not purchased ==> So I have pointed this to my was public ip in the HOST FIle C:\Windows\System32\drivers\etc

    location / {
        proxy_pass http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
	}
}
```



# HTTPS certification

You can get certification from the various organizations.
Get Free Certification from Lets Encrypt

# CertBot Certification

``` bash 
https://certbot.eff.org/instructions?ws=nginx&os=ubuntufocal
```