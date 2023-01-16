API_URL=http://localhost:3000
MESSAGE={"message": "Hello World"}

send:
ifdef msg
	curl -X POST -H "Content-Type: application/json" -d '${msg}' ${API_URL}
else
	curl -X POST -H "Content-Type: application/json" -d '${MESSAGE}' ${API_URL}
endif

	@echo "Message sent"