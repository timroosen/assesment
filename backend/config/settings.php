<?php

//ini_set('display_errors', 1);
//error_reporting(1);

//$app['debug'] = true;

// Cache
$app['cache.path'] = dirname(__DIR__) . '/resources/cache';

// Twig cache
$app['twig.options.cache'] = $app['cache.path'] . '/twig';

// Cache for services
// $app['services.options.cache'] = $app['cache.path'] . '/services';
