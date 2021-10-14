// Entry point for your typescript application
import "@hotwired/turbo-rails"

import {application} from "/application.ts"
import HelloController from "/hello_controller.ts"

application.register("hello", HelloController)