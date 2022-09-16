pwd
ls
cd /var/www/html
pwd
ls
echo "curl -o"
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
echo "nvm/nvm.sh"
. ~/.nvm/nvm.sh
echo "nvm install --lts"
nvm install --lts
echo "node -v"
node -v
echo "npm -v"
npm -v
sudo npm install