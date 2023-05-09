package apiServer

import (
	"Jira_Connector/internal/connector"
	"Jira_Connector/internal/dataTransformer"
	"Jira_Connector/internal/jsonModels"
	"Jira_Connector/internal/utils"
	"encoding/json"
	"log"
	"math"
	"net/http"
	"strconv"
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

	pageNumber, _ := strconv.Atoi(r.FormValue("page"))
	projectsCount, _ := strconv.Atoi(r.FormValue("limit"))
	searchParam := r.FormValue("search")

	projects, err := dataTransformer.ProjectsInBytesToStruct(projectsBytes)
	if err != nil {
		log.Fatal(err)
	}

	//filter projects by searchParam
	projects = utils.SearchProjects(projects, searchParam)
	maxPageNumber := int(math.Ceil(float64(len(projects)) / float64(projectsCount)))
	if maxPageNumber < pageNumber {
		pageNumber = 1
	}

	//get slice of projects on pageNumber
	var lastProjectInArray int
	if (projectsCount * pageNumber) > len(projects) {
		lastProjectInArray = len(projects)
	} else {
		lastProjectInArray = projectsCount * pageNumber
	}
	projectsPage := projects[(projectsCount * (pageNumber - 1)):lastProjectInArray]

	count := len(projects)
	if len(projectsPage) == 0 {
		pageNumber = 1
		maxPageNumber = 0
		count = 0
	}
	//add pageInfo
	page := jsonModels.Page{Projects: projectsPage, PageInfo: struct {
		CurrentPage   int `json:"currentPage" structs:"currentPage"`
		PageCount     int `json:"pageCount" structs:"pageCount"`
		ProjectsCount int `json:"projectsCount" structs:"projectsCount"`
	}{
		CurrentPage:   pageNumber,
		PageCount:     maxPageNumber,
		ProjectsCount: count}}

	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH")
	w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

	err = json.NewEncoder(w).Encode(page)
	if err != nil {
		log.Fatal(err)
	}
}

func updateProjectIssues(w http.ResponseWriter, r *http.Request) {

}
