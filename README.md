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