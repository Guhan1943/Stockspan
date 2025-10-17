package com.example.Stockspan.Service;

// package com.example.Backend..Service;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class StockSpanService {
    public List<Integer> calculateStockSpan(List<Integer> prices) {
        Deque<int[]> stack = new ArrayDeque<>(); // pair [price, span]
        List<Integer> result = new ArrayList<>();

        for (int price : prices) {
            int span = 1;
            while (!stack.isEmpty() && stack.peek()[0] <= price) {
                span += stack.pop()[1];
            }
            stack.push(new int[]{price, span});
            result.add(span);
        }
        return result;
    }
}
