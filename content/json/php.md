---
title: JSON und PHP
order: 30
---



## Serialisierung

Der PHP Befehl lautet `json_encode`.

Welche Datenstrukturen von PHP lassen sich zu JSON serialisieren?

![encode](/images/json/mapping-php-to-json.svg)

## Objekt

Ein PHP Objekt lässt sich als JSON Objekt darstellen:

<php>
$object = new stdClass();
$object->foo = 30;
$object->name = "Alice";
echo json_encode( $object );
// {"foo":30,"name":"Alice"}
</php>

## Array

Ein "normales" Array mit Integer als Index lässt sich
direkt auf JSON abbilden:

<php>
$array = array( "Apple", "Banana" );
echo json_encode( $array );
// ["Apple","Banana"]
</php>

## Assoziatives Array

Jedes Array kann in PHP auch Strings als Index enthalten.
Ist das der Fall, dann wird es in JSON als Objekt dargestellt:

<php>
$array = array( "foo" => 30, "name" => "Alice");
echo json_encode( $array );
// {"foo":30,"name":"Alice"}
</php>

In JSON gibt es keine Entsprechung für das Assoziative Array
in PHP. Deswegen wird es als Objekt dargestellt.

## Deserialisierung

Wie sollen nun JSON-Objekt zu PHP übersetzt werden? Als Objekt oder als Assoziatives Array?

![decode](/images/json/mapping-json-obj-to-php.svg)

Hier gibt es zwei Varianten, die man über das zweite Argumente von `json_decode` unterscheidet.


### decode false

`false` als zweites Argument oder gar kein zweites Argument bewirkt, dass
alle JSON-Objekte zu PHP-Objekten übersetzt werden




<php>
$string = '{"name":"Alice"}';
$o = json_decode( $string );
var_export( $o );
//  stdClass Object
//  (
//    [name] => Alice
//  )
echo "Wert von name: " . $o->name;
// Alice
</php>


### decode true

`true` als zweites Argument bewirkt, dass
**alle** Objekte als assoziative Arrays decodiert werden.

<php>
$string = '{"name":"Alice"}';
$o = json_decode( $string, true );
print_r( $o );
// Array
// (
//   [name] => "Alice"
// )
echo "Wert von name: " . $o['name'];
// Alice
</php>


## JSON als Rückgabewert

Normalerweise liefert ein PHP Programm als Output HTML. Wenn man statt dessen JSON ausliefern will muss man den HTTP-Header 'Content-Type' und eventuell den HTTP Response Code entsprechend setzen.


<php>
header("Content-type: application/json; charset=utf-8");
http_response_code(200);
echo json_encode($data);
</php>


## Aus einer JSON Datei

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


