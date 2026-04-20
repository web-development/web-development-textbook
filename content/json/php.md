---
title: JSON und PHP
order: 30
---


Die Befehle `json_encode` und `json_decode` sind teil der `JSON` Extension.

In `phpinfo()` kann man sehen ob diese Extension aktiviert ist:

![](/images/json/jsonenabled.png)



## JSON als Austauschformat


Nicht alles was in JavaScript möglich ist wird in PHP als JSON akzeptiert.


### Anführungszeichen

In Javascript müssen attribute nicht in Anführungszeichen stehen:

<javascript caption="OK in Javascript, nicht OK in PHP">
  {
    prop1 : "Schokolade",
    prop2 : 42,
  }
</javascript>

Wenn JSON als Austauschformat zwischen Sprachen verwendet wird, dann müssen
alle Attribute in Anführungszeichen stehen:

<javascript caption="OK in allen Sprachen">
  {
    "prop1" : "Schokolade",
    "prop2" : 42,
  }
</javascript>


### Keine Funktionen


In Javascript kann ein Wert in JSON-Schreibweise auch Funktionen enthalten:

<javascript caption="OK in Javascript, nicht OK in PHP">
  {
    'prop1' : 'Schokolade',
    'prop2' : 42,
    'method_1' : function (x) { return x + ' ist schlecht' },
    'method_2' : x => x + ' ist gut'
  }
</javascript>

Wenn JSON als Austauschformat zwischen Sprachen verwendet wird darf es keine Funktionen enthalten.

<php>
  $json_string = "{
    'prop1' : 'Schokolade',
    'prop2' : 42,
    'method_1' : function (x) { return x + ' ist schlecht' },
    'method_2' : x => x + ' ist gut'
  }";

  $data = json_decode($json_string);

  if( $data == null ) {
    echo json_last_error_msg();   // Output: "Syntax Error"
    exit();
  }
</php>

In PHP wird das gesamte JSON-Objekt verworfen, der Rückgabewert ist `null`
und `json_last_error_msg()`  gibt "Syntax Error" zurück.


## Serialisierung

Der PHP Befehl lautet `json_encode`.

Welche Datenstrukturen von PHP lassen sich zu JSON serialisieren?

![encode](/images/json/mapping-php-to-json.svg)

### Objekt

Ein PHP Objekt lässt sich als JSON Objekt darstellen:

<php>
$object = new stdClass();
$object->foo = 30;
$object->name = "Alice";
echo json_encode( $object );
// {"foo":30,"name":"Alice"}
</php>

### Array

Ein "normales" Array mit Integer als Index lässt sich
direkt auf JSON abbilden:

<php>
$array = array( "Apple", "Banana" );
echo json_encode( $array );
// ["Apple","Banana"]
</php>

### Assoziatives Array

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


