export FLASK_ENV=development
export FLASK_DEBUG=1
export FLASK_APP=main.py
export FLASK_PORT=5000
export REACT_PORT=3000
export PROJECT="The Project"

flask: ;@echo "Flask served on http://127.0.0.1:${FLASK_PORT}....."; 
	# Start the backend
	cd flask-backend && flask run -p${FLASK_PORT} 

react: ;@echo "React running on http://localhost:${REACT_PORT}.....";
	# Start the frontend
	cd react-frontend && yarn start


setup: ;@echo "Setting up ${PROJECT}....."; 
	# Installs dependencies
	cd flask-backend && pip install -r requirements.txt
	cd react-frontend && yarn install

deploy: ;@echo "Building ${PROJECT}....."; 
	# For deployment, we will need to place the react project to the backend
	cd react-frontend && yarn install && yarn build 
	cp -a react-frontend/build/. flask-backend/static/react
	cp -a flask-backend/static/react/index.html flask-backend/templates/index.html 
