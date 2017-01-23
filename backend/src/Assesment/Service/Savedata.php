<?php

namespace Assesment\Service;

use Symfony\Component\HttpFoundation\Response;

class Savedata extends Response {

  private $app;

  public function __construct($app) {

      $this->app = $app;

  }

  public function saveUser($post){

      $http_code = 400;


      if(empty($post['name']) || !is_string($post['name'])) {
          return $this->app->json('Could not validate: name', Response::HTTP_BAD_REQUEST);
      }

      if(empty($post['email']) || !is_string($post['email'])) {
          return $this->app->json('Could not validate: email', Response::HTTP_BAD_REQUEST);
      }

      if(empty($post['question5']) || !is_string($post['question5'])) {
          return $this->app->json('Could not validate: question5', Response::HTTP_BAD_REQUEST);
      }

      if(empty($post['question6']) || !is_string($post['question6'])) {
          return $this->app->json('Could not validate: question6', Response::HTTP_BAD_REQUEST);
      }

      $this->app['db']->insert('users', array(
              'name' => $post['name'],
              'email' => $post['email'],
              'question5' => $post['question5'],
              'question6' => $post['question6']
          )
      );


      return $this->app->json('Data saved', Response::HTTP_OK);


  }

}
