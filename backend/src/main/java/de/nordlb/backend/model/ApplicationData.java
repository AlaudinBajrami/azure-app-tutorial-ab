package de.nordlb.backend.model;


import jakarta.persistence.*;

@Entity
public class ApplicationData {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @Column(length = 100)
    private String information;

    // ...
}