# Back-End Liverpool 

For the back-end development, we have chosen to use Flask, a widely used Python framework for building server-side web applications.
To install Flask, simply navigate to the folder named "BackLiverpool" and execute the following command in the terminal:

```bash
pip install flask
```

To run it, simply access your terminal and type the following command:
```bash
python .\server.py
```

## Mongo DB 

To connect to our database, it's necessary to install MongoDB using the following command:
```bash 
pip install pymongo
```

This command will install MongoDB's driver pymongo, enabling connection and interaction with the MongoDB database.

Furthermore, to store the Excel documents before sending them to the database, you'll need to create a folder named 'Temp'.

## Model 

To ensure proper functionality of the 'server.py' file, you need to install the following libraries: 'catboost' for loading the predictive model,
as well as 'pandas' and 'joblib'. You can install them by using the following command:

```bash
pip install pandas catboost joblib
```

This command will ensure that you have the necessary libraries installed to enable the 'server.py' file to execute its functionality correctly.

For resource sharing, we use Flask-CORS, which you'll need to install as follows:

```bash
pip install flask-cors
```

Certainly! To install the openpyxl library, which is used for reading and writing Excel files in Python, you can use the following command in your terminal or command prompt:

```bash 
pip install openpyxl
```

This command will install the openpyxl library in your Python environment, allowing you to work with Excel files using Python code.
