import test from 'ava';
import fn from './';

test('should give us y', t => {
	t.is(fn({x:1}).y, 1.618);
	t.end();
});

test('should give us x', t => {
	t.is(fn({y:1}).x, 0.6180469715698392);
	t.end();
});

test('should throw an error', t => {
	t.throws(function () {
			fn({x:'meow'});
	});
	t.end();
});
