package com.smartpick.backend;

import org.springframework.web.bind.annotation.*;
import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "http://localhost:5174"
})
public class ProductController {

    private final ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productRepository.findById(id).orElse(null);
    }

    @GetMapping("/category/{category}")
    public List<Product> getProductsByCategory(
            @PathVariable String category) {
        String normalized = normalizeCategory(category);
        return productRepository.findByCategoryIgnoreCase(normalized);
    }

    @GetMapping("/recommend")
    public List<Product> recommendProducts(
            @RequestParam String category,
            @RequestParam BigDecimal budget,
            @RequestParam(required = false) Integer ram,
            @RequestParam(required = false) Integer storage,
            @RequestParam(required = false) String brand,
            @RequestParam(required = false) BigDecimal displaySize,
            @RequestParam(required = false) String resolution,
            @RequestParam(required = false) Boolean hasGps,
            @RequestParam(required = false) Integer batteryLifeDays) {

        String normalized = normalizeCategory(category);
        List<Product> products =
                productRepository.findByCategoryIgnoreCase(normalized);

        return products.stream()
                .filter(product ->
                        product.getPrice() != null
                                && product.getPrice().compareTo(budget) <= 0)
                .filter(product ->
                        brand == null
                                || brand.isBlank()
                                || brand.equalsIgnoreCase("Any brand")
                                || brand.equalsIgnoreCase(product.getBrand()))
                .filter(product ->
                        ram == null
                                || (product.getRamGb() != null && product.getRamGb() >= ram))
                .filter(product ->
                        storage == null
                                || (product.getStorageGb() != null && product.getStorageGb() >= storage))
                .filter(product ->
                        displaySize == null
                                || (product.getDisplaySize() != null
                                        && product.getDisplaySize().compareTo(displaySize) == 0))
                .filter(product ->
                        resolution == null
                                || resolution.isBlank()
                                || resolution.equalsIgnoreCase("Any resolution")
                                || (product.getResolution() != null
                                        && product.getResolution().toLowerCase().contains(resolution.toLowerCase())))
                .filter(product ->
                        hasGps == null
                                || (product.getHasGps() != null && product.getHasGps().equals(hasGps)))
                .filter(product ->
                        batteryLifeDays == null
                                || (product.getBatteryLifeDays() != null && product.getBatteryLifeDays() >= batteryLifeDays))
                .toList();
    }

    private String normalizeCategory(String category) {
        if (category == null) return "";
        String cat = category.trim().toLowerCase();
        if (cat.startsWith("laptop")) return "Laptop";
        if (cat.startsWith("mobile") || cat.startsWith("phone")) return "Mobile";
        if (cat.startsWith("tv") || cat.startsWith("television")) return "TV";
        if (cat.startsWith("smartwatch") || cat.startsWith("watch")) return "Smartwatch";
        return category.trim();
    }
}