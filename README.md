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