# -Assignment-HypermartQueue

A real-time queue management system for handling customer checkouts in a supermarket setting.

## Overview

This project implements a smart checkout allocation system that distributes customers across multiple checkout counters based on their cart sizes to minimize waiting times.

## Features

- Real-time customer queue management
- Automatic counter assignment based on total items
- Dynamic updates of customer counts and total items
- Visual representation of queue status

## Technical Implementation

### Algorithm

The system uses a "Least Total Items" approach to assign new customers:

1. When a new customer arrives:
   - Calculate total items in each counter queue
   - Assign customer to the counter with minimum total items
   - Update the UI to reflect changes

### Time Complexity

- Customer Assignment: O(n)
  - Where n is the number of counters (currently fixed at 3)
- Queue Updates: O(m)
  - Where m is the maximum number of customers in a single queue

### Space Complexity

- O(k) where k is the total number of customers across all queues

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
