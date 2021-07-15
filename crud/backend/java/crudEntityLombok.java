package com-ladyjava-crud-entity-lombok;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

//To use the @Data annotation you should add the Lombok dependency.
@Data
@Entity
class CostumerCrud {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private CostumerCrud id;
}