#! /bin/bash
SCRIPT_HOME=$0
cd `dirname $0`
if [ -n "`readlink $SCRIPT_HOME`" ] ; then
    SCRIPT_HOME="`readlink $SCRIPT_HOME`"
fi

SCRIPT_HOME="`dirname $SCRIPT_HOME`"
cd $SCRIPT_HOME
SCRIPT_HOME=`pwd`
cd $SCRIPT_HOME
bower update
