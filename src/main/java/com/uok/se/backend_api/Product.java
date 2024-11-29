package com.uok.se.backend_api;

//Marks the class as an entity, meaning it will be mapped to a table in the database.
import jakarta.persistence.Entity;
//Specifies the primary key of the entity
import jakarta.persistence.Id;
//Specifies the name of the database table that this entity will map to
import jakarta.persistence.Table;

@Entity
@Table(name = "products")
public class Product {

  @Id
  private String id;
  private String name;
  private String description;
  private String price;

  public String getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public String getPrice() {
    return price;
  }

  public void setId(String id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public void setPrice(String price) {
    this.price = price;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }
}
