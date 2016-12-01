<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Migrate extends CI_Controller {

	public function index() {
		// $this->load->view('welcome_message');
		$this->load->library("migration");

		if (!$this->migration->latest()) {
			show_error($this->migration->error_string());
		}
	}
}
