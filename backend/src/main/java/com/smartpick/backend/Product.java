
package com.smartpick.backend;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    private String brand;
    private String category;
    private BigDecimal price;
    private String processor;

    @Column(name = "ram_gb")
    private Integer ramGb;

    @Column(name = "storage_gb")
    private Integer storageGb;

    private String gpu;

    @Column(name = "display_size")
    private BigDecimal displaySize;

    @Column(name = "battery_wh")
    private BigDecimal batteryWh;

    private BigDecimal rating;

    @Column(name = "image_url", columnDefinition = "TEXT")
    private String imageUrl;

    @Column(name = "resolution")
    private String resolution;

    @Column(name = "has_gps")
    private Boolean hasGps;

    @Column(name = "battery_life_days")
    private Integer batteryLifeDays;

    public Product() {
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getBrand() { return brand; }
    public String getCategory() { return category; }
    public BigDecimal getPrice() { return price; }
    public String getProcessor() { return processor; }
    public Integer getRamGb() { return ramGb; }
    public Integer getStorageGb() { return storageGb; }
    public String getGpu() { return gpu; }
    public BigDecimal getDisplaySize() { return displaySize; }
    public BigDecimal getBatteryWh() { return batteryWh; }
    public BigDecimal getRating() { return rating; }
    public String getImageUrl() { return imageUrl; }
    public String getResolution() { return resolution; }
    public Boolean getHasGps() { return hasGps; }
    public Integer getBatteryLifeDays() { return batteryLifeDays; }
}
