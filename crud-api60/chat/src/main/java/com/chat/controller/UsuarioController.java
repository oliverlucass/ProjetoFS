package com.chat.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.chat.model.Usuario;
import com.chat.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {
	
	
	@Autowired
	private final UsuarioRepository usuarioRepository;
	
	public UsuarioController(UsuarioRepository usuarioRepository) {
		super();
		this.usuarioRepository = usuarioRepository;
	}


	@GetMapping
	public List<Usuario> list() {
		return usuarioRepository.findAll();
	}
	
	
}
