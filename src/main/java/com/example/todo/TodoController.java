package com.example.todo;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class TodoController {
    private final TodoRepository todoRepository;

    @GetMapping("/gettodo")
    public Todo getTodo(@RequestParam("id") Long id){
        Todo todo = todoRepository.findById(id).get(); 
        return todo;
    }

    @PostMapping("/create")
    public Todo createTodo(@RequestBody CreateTodo createTodo){
        Todo todo = Todo.builder()
                .text(createTodo.getText())
                .endDay(createTodo.getEndDay())
                .build();

        todoRepository.save(todo);
        return todo;
    }

    @DeleteMapping("/delete")
    public void deleteTodo(@RequestParam("id") Long id){
        Todo todo = todoRepository.findById(id).get();
        todoRepository.delete(todo);
    }

    @GetMapping("/getall")
    public List<Todo> getAll(){
        List<Todo> todos = todoRepository.findAll();
        return todos;
    }
}
