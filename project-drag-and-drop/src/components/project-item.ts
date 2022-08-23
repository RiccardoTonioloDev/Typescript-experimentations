import { Draggable } from '../models/drag-drop.js';
import { Project, ProjectStatus } from '../models/project.js';
import { Component } from './base-component.js';
import { AutoBind } from '../decorators/autobind.js';

export class ProjectItem
    extends Component<HTMLUListElement, HTMLLIElement>
    implements Draggable
{
    private project: Project;

    get persons() {
        return this.project.people === 1
            ? '1 person'
            : `${this.project.people.toString()} persons`;
    }

    constructor(hostId: string, project: Project) {
        super('single-project', hostId, false, project.id);
        this.project = project;
        this.configure();
        this.renderContent();
    }

    @AutoBind
    dragStartHandler(event: DragEvent) {
        event.dataTransfer!.setData('text/plain', this.project.id);
        event.dataTransfer!.effectAllowed = 'move';
    }
    @AutoBind
    dragEndHandler(_: DragEvent) {
        const finalUlTarget = document.getElementById(
            `${
                this.project.status === ProjectStatus.Active
                    ? 'active'
                    : 'finished'
            }-projects-list`
        )!;
        finalUlTarget.classList.remove('droppable');
    }

    configure() {
        this.element.addEventListener('dragstart', this.dragStartHandler);
        this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent() {
        this.element.querySelector('h2')!.textContent = this.project.title;
        this.element.querySelector(
            'h3'
        )!.textContent = `${this.persons} assigned`;
        this.element.querySelector('p')!.textContent = this.project.description;
    }
}
