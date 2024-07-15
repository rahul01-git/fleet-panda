#!/bin/bash
#
echo "Enter your marks: "
read marks

if [ $marks -ge 90 -a $marks -le 100 ]; then
        echo "$marks = A grade"
elif [ $marks -ge 80 -a $marks -le 90 ]; then
        echo "$marks = B grade"
elif [ $marks -ge 70 -a $marks -le 80 ]; then
        echo "$marks = C grade"
elif [ $marks -ge 60 -a $marks -le 70 ]; then
        echo "$marks = D grade"
elif [ $marks -ge 30 -a $marks -le 60 ]; then
        echo "$marks = E grade"
elif [ $marks -ge 0 -a $marks -le 30 ]; then
        echo "$marks = F grade"
else
        echo "$marks Invalid input"
fi
