let recipeDB = [];

// 모든 JSON 파일 이름
const recipeFiles = [];
for(let i=1; i<=80; i++){
    recipeFiles.push(`recipes/${i}.json`); // 예: recipes/1.json
}

// 모든 레시피 로드
async function loadAllRecipes() {
    recipeDB = [];
    for(const file of recipeFiles){
        try{
            const response = await fetch(file);
            const recipe = await response.json();
            recipeDB.push(recipe);
        } catch(err){
            console.error("레시피 로드 실패:", file, err);
        }
    }
}

window.recipeDB = recipeDB;
window.loadAllRecipes = loadAllRecipes;