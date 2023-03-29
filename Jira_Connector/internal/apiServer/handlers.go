package apiServer

import (
	"Jira_Connector/internal/connector"
	"log"
	"net/http"
)

const (
	projectsURL      = "/allProjects"
	updateProjectURL = "/updateProject"
)

func newRouter() *http.ServeMux {
	router := http.NewServeMux()

	router.HandleFunc(projectsURL, getAllProjects)
	router.HandleFunc(updateProjectURL, updateProjectIssues)

	return router
}

// *http.Request — указатель на запрос. Из этого параметра можно получать тело запроса,
//
//	параметры POST, GET или заголовки.
func getAllProjects(w http.ResponseWriter, r *http.Request) {
	projectsBytes := connector.GetAllProjects()
	_, err := w.Write(projectsBytes)
	if err != nil {
		log.Fatal(err)
	}
}

func updateProjectIssues(w http.ResponseWriter, r *http.Request) {

}
