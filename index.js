function countdown( config, label )
{
	let filledCount = config.value;
	let emptyCount = config.segments - config.value;

	let bar = '';

	for( let i = 0; i < emptyCount; i++ )
	{
		bar += config.empty;
	}

	for( let i = 0; i < filledCount; i++ )
	{
		bar += config.filled;
	}

	if( label )
	{
		bar += ` ${config.value}`;
	}

	return bar;
}

function percentage( config, label )
{
	let decimal = config.value / 100;
	let filledCount = Math.round( config.segments * decimal );
	let emptyCount = config.segments - filledCount;

	let bar = '';

	for( let i = 0; i < filledCount; i++ )
	{
		bar += config.filled;
	}

	for( let i = 0; i < emptyCount; i++ )
	{
		bar += config.empty;
	}

	if( label )
	{
		bar += ` ${config.value}%`;
	}

	return bar;
}

module.exports.countdown = countdown;
module.exports.percentage = percentage;
