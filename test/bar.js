const assert = require( 'chai' ).assert;
const Bar = require( '../' );

describe( 'Bar', function()
{
	describe( '.countdown', function()
	{
		it( 'should use segment count specified', function()
		{
			let segments = Math.floor( Math.random() * 7 ) + 3;

			let config = {
				segments: segments,
				empty: '-',
				filled: '+',
				value: segments,
			};

			let bar = Bar.countdown( config, false );
			assert.equal( bar.length, segments );
		});

		it( 'should use empty character', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '+',
				value: 0,
			};

			let bar = Bar.countdown( config, false );
			assert.equal( bar, '-----' );
		});

		it( 'should use filled character', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '#',
				value: 5,
			};
		
			let bar = Bar.countdown( config, false );
			assert.equal( bar, '#####' );
		});

		it( 'should empty from the left', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '#',
				value: 3,
			};
		
			let bar = Bar.countdown( config, false );
			assert.equal( bar, '--###' );
		});

		it( 'should display label', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '%',
				value: 3,
			};

			let bar = Bar.countdown( config, true );
			assert.equal( bar, '--%%% 3' );
		});
	});

	describe( '.percentage', function()
	{
		it( 'should use segment count specified', function()
		{
			let segments = Math.floor( Math.random() * 7 ) + 3;

			let config = {
				segments: segments,
				empty: '-',
				filled: '+',
				value: 100,
			};

			let bar = Bar.percentage( config, false );
			assert.equal( bar.length, segments );
		});

		it( 'should use empty character', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '+',
				value: 0,
			};

			let bar = Bar.percentage( config, false );
			assert.equal( bar, '-----' );
		});

		it( 'should use filled character', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '#',
				value: 100,
			};
		
			let bar = Bar.percentage( config, false );
			assert.equal( bar, '#####' );
		});

		it( 'should fill from the left', function()
		{
			let config = {
				segments: 5,
				empty: '-',
				filled: '$',
				value: 80,
			};
		
			let bar = Bar.percentage( config, false );
			assert.equal( bar, '$$$$-' );
		});

		it( 'should round to nearest segment', function()
		{
			let config = {
				segments: 10,
				empty: '-',
				filled: '#',
			};

			config.value = 85;
			let barRoundUp = Bar.percentage( config, false );
			assert.equal( barRoundUp, '#########-' );

			config.value = 84;		
			let barRoundDown = Bar.percentage( config, false );
			assert.equal( barRoundDown, '########--' );
		});

		it( 'should display label', function()
		{
			let config = {
				segments: 10,
				empty: '░',
				filled: '▓',
				value: 33.33,
			};

			let bar = Bar.percentage( config, true );
			assert.equal( bar, '▓▓▓░░░░░░░ 33.33%' );
		});
	});
});
