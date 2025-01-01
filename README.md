# ToDoList
ToDoList - projekt z JS kurzu


Tento projekt je jednoduchá aplikace pro správu úkolů (To-Do List), kterou jsme vytvořili v rámci kurzu programování. Aplikace umožňuje:

Přidávat nové úkoly s názvem a termínem splnění.
Odstraňovat úkoly z listu.
Ukládat úkoly do localStorage, aby byly zachovány i po obnovení stránky.
Jak aplikace funguje
Funkce
Přidání úkolu
Do políček zadáte název úkolu a termín splnění a kliknete na tlačítko "Add". Úkol se přidá do seznamu.

Odstranění úkolu
Každý úkol má tlačítko "delete". Kliknutím na něj úkol odstraníte.

Uložení úkolů
Úkoly jsou automaticky uloženy do localStorage, což umožňuje zachovat data i po zavření nebo obnovení stránky.

Technologie
HTML: Pro základní strukturu aplikace.
CSS: Pro stylování rozhraní.
JavaScript: Pro dynamickou logiku aplikace.
localStorage: Pro ukládání dat v prohlížeči.
Kódové detaily
Funkce addTodo() zpracovává přidávání nových úkolů a aktualizuje seznam včetně uložení do localStorage.
Funkce newDisplayRender() přerenderuje seznam úkolů pokaždé, když dojde k jeho změně (přidání nebo odstranění).
ToDoList je hlavní datová struktura aplikace – pole, které obsahuje úkoly jako objekty s vlastnostmi name (název) a dueDate (termín splnění).

Možné vylepšení
Přidat funkci pro editaci úkolů.
Možnost označit úkol jako splněný.
Přidání filtrování podle termínu splnění.
