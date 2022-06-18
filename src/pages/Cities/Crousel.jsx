import React from 'react'
import styled from './Crousel.module.css'

export const Crousel = () => {
  return (
    <div>


<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.indianexpress.com/2022/06/16063-pti06_16_2022_000146b.jpg" class="d-block w-100" alt="Coaches of 10 trains, buses torched in Bihar; houses of top BJP leaders targeted"/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>First slide label</h5> */}
        <p ><mark class='text-success'> Coaches of 10 trains, buses torched in Bihar; houses of top BJP leaders targeted </mark></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.indianexpress.com/2022/06/Secunderabad-attack.jpg?resize=450,250" class="d-block w-100" alt="Secuderabad attack was planned, mob had WhatsApp group:Police"/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Second slide label</h5> */}
        <p ><mark class='text-danger'>Secuderabad attack was planned, mob had WhatsApp group:Police.</mark></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.indianexpress.com/2022/06/prayagraj-violence-3.jpeg?resize=450,250" class="d-block w-100" alt="Row over remarks on the prophet: Will recover cost of damage to properties from accused, says govt"/>
      <div class="carousel-caption d-none d-md-block">
        {/* <h5>Third slide label</h5> */}
        <p > <mark class='text-danger'>Row over remarks on the prophet: Will recover cost of damage to properties from accused, says govt </mark></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
