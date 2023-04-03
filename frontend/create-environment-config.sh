#!/bin/bash

# This script will create a JavaScript file which puts environment variable values as an
# object which is assigned as a property of window object. We need to add the following line to <head>
# element inside index.html: <script src="%PUBLIC_URL%/env-config.js"></script>

# (1) Removes the old file, and creates a new one.
# (2) writes JS code which opens object literal and assigns it to the global window object.
# (3) Reads each line of .env file and splits into key/value pair.
# (4) Look for the environment variable, if set, use its value, otherwise, use the default value from .env file.
# (5) Append it to object that we assigned to global window object
# (6) Close object literal

# $1: target path

# Recreate config file
rm -rf $1/env-config.js
touch $1/env-config.js

# Add assignment
echo "window._env_ = {" >> $1/env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> $1/env-config.js
done < .env

echo "}" >> $1/env-config.js