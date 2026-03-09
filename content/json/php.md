---
title: JSON und PHP
order: 30
---



## Serialisierung

Der PHP Befehl lautet `json_encode`.

Welche Datenstrukturen von PHP lassen sich zu JSON serialisieren?

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

In JSON gibt es keine Entsprechung für das Assoziative Array
in PHP. Deswegen wird es als Objekt dargestellt.  Wenn man
dieses Objekt wieder in JSON zurück wandelt erhält man aber
ein PHP Objekt mit einer Property "0":

<php>
$array = array( "foo" => 10, "bar" => 30, "baz" => 30, 0 => "a");
$string = json_encode( $array );
// {"foo":10,"bar":30,"baz":30,"0":"a"}
$o = json_decode( $string );
var_export( $o );
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
**alle** Objekte als Assoziative Arrays decodiert werden sollen - das
ist meist die bessere Lösung:

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


## JSON als Rückgabewert

Normalerweise liefert ein PHP Programm als Output HTML. Wenn man statt dessen JSON ausliefern will muss man den HTTP-Header 'Content-Type' und eventuell den HTTP Response Code entsprechend setzen.


<php>
header("Content-type: application/json; charset=utf-8");
http_response_code(200);
echo json_encode($data);
</php>


## Deserialierung

Mit dem Befehl `file_get_contents` kann man den gesamten Inhalt einer Datei lesen:

<php>
$string_or_false = file_get_contents('some_data.json');
if($string_or_false == false) {
  echo "Error reading file";
  exit();
}
$data = json_decode($string, true);
</php>



## Referenz

  * [JSON in der PHP Doku](http://www.php.net/manual/de/book.json.php)


