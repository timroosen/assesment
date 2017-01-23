<?php

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;

use Assesment\Service\Savedata;


$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});

$app->get('/', function() use($app) {
    return $app['twig']->render('app.html.twig');
});


$app->post('/api/v1/saveuser', function (Request $request) use ($app) {
    $post = array(
        'name' => $request->request->get('name'),
        'email'  => $request->request->get('email'),
        'question5'  => $request->request->get('question5'),
        'question6'  => $request->request->get('question6'),
    );

    $service = new Savedata($app);
    return $service->saveUser($post);
});


$app->error(function (\Exception $e, $code) use ($app) {

//    var_dump($e);exit;
  if ($app['debug']) {
    return;
  }
  switch ($code) {
    case 404:
      $message = 'The requested page could not be found.';
      break;
    default:
      $message = 'An unknown error has occurred please try again later.';
  }

  return new Response($message, $code);
});
