#!/bin/bash

echo "Today is " `date`

echo  -e "\nenter path to dir"
read the_path

echo -e  "\n your path has these files and folders: "
ls $the_path
