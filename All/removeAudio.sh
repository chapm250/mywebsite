#!/bin/bash
for i in $(ls); do
	echo "y" | ffmpeg -i $i -an $i 
		
done
