---
title: JSON und PHP
order: 30
---

Die PHP Datenstrukturen passen nicht gut zu JSON, deswegen
gibt es beim Serialisieren zu JSON Probleme.

## Objekt

Ein PHP Objekt lässt sich als JSON Objekt darstellen:

<php>
$object = new stdClass();
$object->foo = 10;
$object->bar = "zwanzig";
$object->baz = 30;
echo json_encode( $object );
// {"foo":10,"bar":"zwanzig","baz":30}
</php>

## Array

Ein "normales" Array mit Integer als Index lässt sich
direkt auf JSON abbilden:

<php>
$array = array( "a", "b", "c" );
echo json_encode( $array );
// ["a","b","c"]
</php>

## Assoziatives Array

Jedes Array kann in PHP auch Strings als Index enthalten.
Ist das der Fall, dann wird es in JSON als Objekt dargestellt:

<php>
$array = array( "foo" => 10, "bar" => 30, "baz" => 30);
$array[0] = "a";
echo json_encode( $array );
// {"foo":10,"bar":30,"baz":30,"0":"a"}
</php>

In JSON gibt es keine entsprechung für das Assoziative Array
in PHP. Deswegen wird es als Objekt dargestellt.  Wenn man
dieses Objekt wieder in JSON zurück wandelt erhält man aber
ein PHP Objekt mit einer Property "0":

<php>
$array = array( "foo" => 10, "bar" => 30, "baz" => 30, 0 => "a");
$string = json_encode( $array );
// {"foo":10,"bar":30,"baz":30,"0":"a"}
$o = json_decode( $string );
print_r( $o );
//  stdClass Object
//  (
//    [foo] => 10
//    [bar] => 30
//    [baz] => 30
//    [0] => a
//  )
echo "Wert von foo: " . $o->foo;
echo "Wert von 0: " . $o->{'0'};
</php>

§

Im zweiten Argument von `json_decode` kann man angeben ob
**alle** Objekte als Assoziative Arrays decodiert werden sollen:

<php>
$string = '{"foo":10,"bar":30,"baz":30,"0":"a"}';
$o = json_decode( $string, true );
print_r( $o );
// Array
// (
//   [foo] => 10
//   [bar] => 30
//   [baz] => 30
//   [0] => a
// )
echo "Wert von foo: " . $o['foo'];
echo "Wert von 0: " . $o[0];
</php>



## Referenz

  * [JSON in der PHP Doku](http://www.php.net/manual/de/book.json.php)


