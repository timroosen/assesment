<?php

$app['debug'] = true;

$app->register(new Silex\Provider\TwigServiceProvider(), [
  'twig.options' => [
    'cache'            => FALSE,
    'strict_variables' => TRUE,
      'debug'=> TRUE
  ],
  'twig.path'    => [dirname(__DIR__) . '/templates']
]);


$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options'    => array(
        'dbname'    => 'assesment',
        'user'      => 'root',
        'password'  => 'root',
        'host'      => 'localhost',
        'driver'    => 'pdo_mysql',
        'port'      => 3306,
        'charset' => 'utf8'
    ),
));


$app['twig'] = $app->share($app->extend('twig', function($twig, $app) {
    $twig->addFunction(new \Twig_SimpleFunction('asset', function ($asset) {
        return file_get_contents(sprintf(dirname(__DIR__).'%s', ltrim($asset, '')));
    }));
    return $twig;
}));

