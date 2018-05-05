<?php


namespace App\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends Controller
{

    /**
     * @Route("/http1")
     */
    public function http1Optimized() {
        return $this->render('http1.html.twig');
    }

    /**
     * @Route("/http2")
     */
    public function http2Optimized() {
        return $this->render('http2.html.twig');
    }
}