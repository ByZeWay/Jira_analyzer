package apiServer

import (
	"Jira_Connector/internal/config"
	"log"
	"net/http"
)

// Run will run the HTTP Server
func Run() {

	server := &http.Server{
		Addr:    config.Instance.ConnectorSettings.Host + config.Instance.ConnectorSettings.Port,
		Handler: newRouter(),
	}

	log.Printf("Server is starting on %s\n", server.Addr)
	log.Fatal(server.ListenAndServe())
}
