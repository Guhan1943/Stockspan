package com.example.Stockspan.Controller;

// package com.example.Backend..Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Stockspan.Service.StockSpanService;

@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "http://localhost:5173") // React dev server port (Vite). Change if needed.
public class StockController {

    private final StockSpanService service;

    public StockController(StockSpanService service) {
        this.service = service;
    }

    @PostMapping("/analyze")
    public List<Integer> analyzeStock(@RequestBody List<Integer> prices) {
        return service.calculateStockSpan(prices);
    }
}
