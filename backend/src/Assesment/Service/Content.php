<?php

namespace Assesment\Service;

class Content {

  private $name;
  private $app;
  private $content;

  public function __construct($app) {
    //$this->_name = $name;
    $this->app = $app;
    //$str = file_get_contents('http://example.com/example.json/');

    $path =   '../resources/content.json';

    if(!file_exists($path) ){
      var_dump($path);
      return false;
    }

    $this->content = json_decode(file_get_contents($path));
  }

  public function getArtistContent($name){
    foreach ($this->content->artists as $artist){
       if($name == $artist->scrollid){
         $content = $artist;
       }
    }
    return $content;
  }
}
