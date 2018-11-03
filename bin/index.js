#!/usr/bin/env node

const chart = require( '../index.js' );
const countdown = chart.countdown;
const percentage = chart.percentage;
const pkg = require( '../package.json' );

let usageString = `usage: ${pkg.name} [--segments <count>] [--countdown <remaining>|--percent <value>] [--no-label]`;
if( process.argv.indexOf( '--help' ) > -1 )
{
	console.log( usageString );
	process.exit();
}

if( process.argv.indexOf( '--version' ) > -1 )
{
	console.log( `${pkg.name} version ${pkg.version}` );
	process.exit();
}

let config = {
	segments: 25,
	empty: "░",
	filled: "▓"
};


let indexOfSegmentsFlag = process.argv.indexOf( '--segments' );
let indexOfPercentFlag = process.argv.indexOf( '--percent' );
let indexOfCountdownFlag = process.argv.indexOf( '--countdown' );

if( indexOfSegmentsFlag > -1 )
{
	config.segments = Number.parseInt( process.argv[indexOfSegmentsFlag+1] );
}

if( indexOfPercentFlag > -1 )
{
	if( process.argv[indexOfPercentFlag+1] )
	{
		config.value = Number.parseFloat( process.argv[indexOfPercentFlag+1] );
		console.log( percentage( config, process.argv.indexOf( '--no-label' ) == -1 ) );		
	}
	else
	{
		for( let i=0; i<=100; i++ )
		{
			config.value = i;
			console.log( percentage( config, process.argv.indexOf( '--no-label' ) == -1 ) );
		}
	}
}
else if( indexOfCountdownFlag > -1 )
{
	if( process.argv[indexOfCountdownFlag+1] )
	{
		config.value = Number.parseInt( process.argv[indexOfCountdownFlag+1] );
		console.log( countdown( config, process.argv.indexOf( '--no-label' ) == -1 ) );
	}
	else
	{
		for( let i=config.segments; i>=0; i-- )
		{
			config.value = i;
			console.log( countdown( config, process.argv.indexOf( '--no-label' ) == -1 ) );
		}
	}
}
else {
    console.log( usageString );
	process.exit( 1 );
}
